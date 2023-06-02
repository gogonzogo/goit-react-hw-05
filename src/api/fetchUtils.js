export const isTimeStampExpired = (timeStamp) => {
  if (!timeStamp) {
    return true;
  }
  const currentTimeStamp = getCurrentTimeStamp();
  return timeStamp !== currentTimeStamp;
}

export const getCurrentTimeStamp = () => {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  return `${day}-${month}`;
}

export const urlEndPoint = (url) => {
  const urlArr = url.split('/');
  const endPoint = urlArr[urlArr.length - 1];
  return endPoint;
}