const employee = {
    name: 'Bree',
    streetAddress: 'Windsor Street'
  };
  
  function updateEmployeeWithKeyAndValue(obj,key,value)
  {
    const newObj = { ...employee};
    newObj[key]=value;
    return newObj;
  }
  const newEmployee = updateEmployeeWithKeyAndValue(employee,'name','Gary')
  
  function destructivelyUpdateEmployeeWithKeyAndValue(obj,key,value)
  {
    obj[key] = value;
    return obj;
  }
  const changeEmployee=destructivelyUpdateEmployeeWithKeyAndValue(employee,'name','John')
  
  function deleteFromEmployeeByKey(obj,key,value)
  {
   const newObject = { ...employee};
    newObject[key]=value;
    return newObject;
  }
  const newEmp = deleteFromEmployeeByKey(employee,'name','Kruti')
   
  function destructivelyDeleteFromEmployeeByKey(obj,key,value)
  {
    obj[key] = value;
    return obj;
  }
  const changeEmp=destructivelyUpdateEmployeeWithKeyAndValue(employee,'name','Alice')
  