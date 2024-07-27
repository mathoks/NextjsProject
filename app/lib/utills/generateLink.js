export const createLink = (formData) => {
    let links = [];
    formData.forEach((value, key) => {
      if (key === "link") {
        links.push(value);
      }
    });
    return links;
  };