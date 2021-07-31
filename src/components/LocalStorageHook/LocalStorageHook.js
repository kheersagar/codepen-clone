import React, { useEffect, useState } from 'react'

const PREFIX = 'codepen-';

function LocalStorageHook(key,iniitialValue) {

  const prefixedKey = PREFIX + key;
  const [value, setValue] = useState(()=>{
    const jsonvalue = localStorage.getItem(prefixedKey);
    if(jsonvalue != null) return JSON.parse(jsonvalue);

    if(typeof jsonvalue === 'function'){
      return iniitialValue()
    }else{
      return iniitialValue
    }
  });

  useEffect(()=>{
  localStorage.setItem(prefixedKey,JSON.stringify(value));
  },[prefixedKey,value]);

  return [value,setValue]
}

export default LocalStorageHook
