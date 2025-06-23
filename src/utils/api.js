//const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
 /* 

export function getBaseUrl() {
    return process.env.NEXT_PUBLIC_API_BASE_URL || '';
  }
  
const handleResponse = async (response) => {
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.detail || 'Something went wrong');
  }
  return response.json();
};

export const apiPost = async (endpoint, data = {}, token = null) => {
  const res = await fetch(`${getBaseUrl()}${endpoint}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
    },
    body: JSON.stringify(data),
  });
  return handleResponse(res);
};

export const apiGet = async (endpoint, token = null) => {
  const res = await fetch(`${getBaseUrl()}${endpoint}`, {
    headers: {
      ...(token && { Authorization: `Bearer ${token}` }),
    },
  });
  return handleResponse(res);
};
*/

// الحل الأول: التحقق من وجود process قبل استخدامه
const getBaseUrl = () => {
    // التحقق من أننا في بيئة server-side أو client-side
    if (typeof process !== 'undefined' && process.env && process.env.NEXT_PUBLIC_API_BASE_URL) {
      return process.env.NEXT_PUBLIC_API_BASE_URL;
    }
    // قيمة افتراضية إذا لم يتم العثور على المتغير
    return 'https://621c-156-223-98-173.ngrok-free.app';
  };
  
  const handleResponse = async (response) => {
    if (!response.ok) {
      if (response.status === 401 || response.status === 403) {
        localStorage.removeItem('token');
        if (typeof window !== 'undefined') {
          window.location.href = '/auth/login?session=expired';
        }
      }
      const errorData = await response.json();
      throw new Error(errorData.detail || 'Something went wrong');
    }
    return response.json();
  };
  
  export const apiPost = async (endpoint, data = {}, token = null, isFormData = false) => {
    const headers = isFormData
      ? { ...(token && { Authorization: `Bearer ${token}` }) }
      : { 'Content-Type': 'application/json', ...(token && { Authorization: `Bearer ${token}` }) };
    const res = await fetch(`${getBaseUrl()}${endpoint}`, {
      method: 'POST',
      headers,
      body: isFormData ? data : JSON.stringify(data),
    });
    return handleResponse(res);
  };
  
  export const apiGet = async (endpoint, token = null) => {
    const res = await fetch(`${getBaseUrl()}${endpoint}`, {
      headers: {
        ...(token && { Authorization: `Bearer ${token}` }),
      },
    });
    return handleResponse(res);
  };
  
  export const apiDelete = async (endpoint, token = null) => {
    const res = await fetch(`${getBaseUrl()}${endpoint}`, {
      method: 'DELETE',
      headers: {
        ...(token && { Authorization: `Bearer ${token}` }),
      },
    });
    return handleResponse(res);
  };
  
  export const apiPatch = async (endpoint, data = {}, token = null) => {
    const res = await fetch(`${getBaseUrl()}${endpoint}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        ...(token && { Authorization: `Bearer ${token}` }),
      },
      body: JSON.stringify(data),
    });
    return handleResponse(res);
  };
  
  export { getBaseUrl };