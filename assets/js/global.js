/**
 * @param {number} secs
 */
async function sleep(secs) {
  await new Promise(r => setTimeout(r, (secs*1000)));
}

/**
 * @param {number} usecs
 */
async function usleep(usecs) {
  await new Promise(r => setTimeout(r, (usecs)));
}

/**
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
function RandInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (min > max) {
    [min, max] = [max, min];
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}