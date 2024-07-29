export const createFormbody = async(fields) => {
        // Create an empty object to store form data
        const formBody = {};
        fields.forEach((field) => {
          const key = Object.keys(field)[0];  
          if(field[key] !== '' && field[key] !== null && field[key] !== 'Price flexibility' && field[key] !== 'Product status' && field[key] !== 'Availability' && field[key] !== 'Choose a category'){
            return formBody[key] = field[key];
          }
         else return;
        });
      if(Object.keys(formBody).length === 0 || Object.keys(formBody).length === 1) return null;
        return formBody;
      };
