/**
 * Created by yisheng on 2018/7/5
 */
import React from 'react';
const EditNode=({value,id,record})=>{

  return(
    <div style={{position:'absolute',left:'50%',top:0,width:150,zIndex:6}} onClick={()=>{console.log(value,id,record)}}>
     编辑,删除,测试
    </div>
  )
}

export  default EditNode;
