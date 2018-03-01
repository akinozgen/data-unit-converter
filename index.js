/**
 * @param {number} count
 * @param {string} from
 * @param {string} to
*/
module.exports = function (count, from, to) {

  let bytes  = 0;
  let bits   = 0;

  switch (from) {
    case 'B':  bytes = count; break;
    case 'KB': bytes = count * 1024; break;
    case 'MB': bytes = count * (1024 * 1024); break;
    case 'GB': bytes = count * (1024 * 1024 * 1024); break;
    case 'TB': bytes = count * (1024 * 1024 * 1024 * 1024); break;
    case 'b':  bytes = count / 8; break;
    case 'Kb': bytes = (count * 1024) / 8; break;
    case 'Mb': bytes = (count * (1024 * 1024)) / 8; break;
    case 'Gb': bytes = (count * (1024 * 1024 * 1024)) / 8; break;
    case 'Tb': bytes = (count * (1024 * 1024 * 1024 * 1024)) / 8; break;
  };

  switch (to) {
    case 'b':  return bytes * 8;  break;
    case 'Kb': return (bytes / 1024) * 8; break;
    case 'Mb': return ((bytes / 1024) / 1024) * 8; break;
    case 'Gb': return (((bytes / 1024) / 1024) / 1024) * 8; break;
    case 'Tb': return ((((bytes / 1024) / 1024) / 1024) / 1024) * 8; break;
    case 'B':  return bytes; break;
    case 'KB': return (bytes / 1024); break;
    case 'MB': return (bytes / 1024) / 1024; break;
    case 'GB': return ((bytes / 1024) / 1024) / 1024; break;
    case 'TB': return (((bytes / 1024) / 1024) / 1024) / 1024; break;
  }
}
