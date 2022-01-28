let user = JSON.parse(localStorage.getItem('user'));

const tokenHasExpired = () => {
  if (Date.now() < (user.expiry - (1000 * 60 * 5))) {
    return false;
  }
  return true;
}

const getToken = async () => {
  let token = '';
  if (user) {
    if (tokenHasExpired()) {
      token = await refreshToken();
    }
    else {
      token = user.token;
    }
  }
  return token;
}

const refreshToken = async () => {
  const response = await fetch('/users/refreshToken', {
    body: JSON.stringify({ token: user.token }),
    headers: {
      'content-type': 'application/json'
    },
    method: 'POST'
  });
  if (response.ok) {
    user = await response.json();
    localStorage.setItem('user', JSON.stringify(user));
    return user.token;
  }
  return null;
};

const postData = async (url, data, token) => {
  if (!token) {
    token = await getToken();
  }
  const response = await fetch(url, {
    body: data ? JSON.stringify(data) : null,
    headers: {
      'Authorization': `Bearer ${token}`,
      'content-type': 'application/json'
    },
    method: 'POST'
  });
  return response;
};

const getData = async (url, token) => {
  if (!token) {
    token = await getToken();
  }
  const response = await fetch(url, {
    headers: {
      'Authorization': `Bearer ${token}`,
      'content-type': 'application/json'
    },
    method: 'GET'
  });
  return response;
};

const uploadFiles = async (url, files) => {
  const token = await getToken();
  const formData = new FormData();
  for (let i = 0; i < files.length; i++) {
    formData.append('files', files[i]);
  }
  const response = await fetch(url, {
    body: formData,
    headers: {
      'Authorization': `Bearer ${token}`
    },
    method: 'POST'
  });
  return response;
}

const logIn = async (email, password) => {
  const response = await fetch('/users/getToken', {
    body: JSON.stringify({ email, password }),
    headers: {
      'content-type': 'application/json'
    },
    method: 'POST'
  });
  if (response.ok) {
    user = await response.json();
    localStorage.setItem('user', JSON.stringify(user));
    return user;
  }
  return null;
};

const signOut = () => {
  localStorage.removeItem('user');
  user = null;
};

export default {
  user,
  getToken,
  postData,
  getData,
  uploadFiles,
  logIn,
  signOut
};
