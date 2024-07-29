export const createLink = (formData) => {
    let links = [];
    formData.forEach((value, key) => {
      if (key === "link") {
        links.push(value);
      }
    });
    if(links.length === 0) return null;
    return links;
  };