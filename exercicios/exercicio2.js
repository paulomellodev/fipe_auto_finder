const updateData = (currentObject, newDataObject) => {
  if (typeof currentObject !== "object" || typeof newDataObject !== "object") {
    throw new Error("Both parameters mut be an object");
  }

  for (let key in newDataObject)
    if (currentObject.hasOwnProperty(key)) {
      currentObject[key] = newDataObject[key];
    }

  return currentObject;
};

module.exports = updateData;
