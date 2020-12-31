export function nameFilter(val) {
  if (val.tagname === "mono") {
    val.pv = val.var_name === "????" ? "0" : val.var_name;
    val.var_name = "制令单";
  }
  if (val.tagname === "people") {
    val.pv = val.var_name === "????" ? "0" : val.var_name;
    val.var_name = "员工代号";
  }
  if (val.tagname === "md_no") {
    val.pv = val.var_name === "????" ? "0" : val.var_name;
    val.var_name = "模具代号";
  }
  if (val.tagname === "prd_no") {
    val.pv = val.var_name === "????" ? "0" : val.var_name;
    val.var_name = "货品代号";
  }
  if (val.tagname === "snm") {
    val.pv = val.var_name === "????" ? "0" : val.var_name;
    val.var_name = "货品简称";
  }
}

export function deviceStatus(val) {
  if (val.pv === 100|| val.pv === 200) {
    val.pv = "success";
  } else if (val.pv === 300) {
    val.pv = "error";
  } else {
    val.pv = "down";
  }
}

export function OrderFilter(filterList, dataList) {
  const filterToList = [];
  filterList.forEach(val => {
    for (let i in dataList) {
      if (dataList[i].tagname === val) {
        filterToList.push(dataList[i]);
      }
    }
  });
  return filterToList;
}

export function FullOrderFilter(list_1, list_2, list_3, list_4, dataList) {
  let listSave_1 = [];
  let listSave_2 = [];
  let listSave_3 = [];
  let listSave_4 = [];
  listSave_1 = OrderFilter(list_1, dataList);
  listSave_2 = OrderFilter(list_2, dataList);
  listSave_3 = OrderFilter(list_3, dataList);
  listSave_4 = OrderFilter(list_4, dataList);
  return [listSave_1, listSave_2, listSave_3, listSave_4];
}
