function getCookie(request, cookieName) {
    // Check if browser environment (document object available)
    if (typeof document !== 'undefined') {
      const cookies = document.cookie.split(';');
      for (const cookie of cookies) {
        const [key, value] = cookie.trim().split('=');
        if (key === cookieName) {
          return value;
        }
      }
    } else if (request && typeof request.headers === 'object') { // Check for request object with headers
      const cookieHeader = request.headers.cookie;
      if (cookieHeader) {
        const cookieParts = cookieHeader.split(';');
        for (const part of cookieParts) {
          const [key, value] = part.trim().split('=');
          if (key === cookieName) {
            return value;
          }
        }
      }
    }
  
    // If not found in browser or request object
    return null;
  }
  