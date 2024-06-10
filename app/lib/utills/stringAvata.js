/**
 * convert string to color
 * @param {*} string 
 * @returns {string}
 */

function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

/**
 * string avatar
 * @param {string} name - name of the user
 * @param {string} image - image of the user
 * @returns {object}
 */

export function stringAvatar(name = "", image = "") {
  
  return {
    sx: image ? { bgcolor: 'transparent' } : {bgcolor: stringToColor(name)},
    src : image ? image : undefined,
    children: image ? image : `${name.split(' ')[0][0]}`,
  };
}

//${name.split(' ')[1][0]}