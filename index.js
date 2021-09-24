function displayInfo(customerInfo) {
  const infoContainer = document.createElement("div");
  infoContainer.innerHTML = `<h1>Tên: ${customerInfo.name}</h1>
<p>Năm sinh:${customerInfo.birth}</p>
<p>Số CMND:${customerInfo.cmnd}</p>
<p>Số điện thoại:${customerInfo.tel}</p>`;
  infoContainer.className = "four wide column";
  infoContainer.style.border = '1px solid black';
  infoContainer.style.margin = '20px 0';
  return infoContainer;
}

function getInfo() {
  const container = document.getElementById("container");
  let cusName = document.getElementById("name");
  let cusBirth = document.getElementById("birthYear");
  let cusCMND = document.getElementById("cmndNumber");
  let cusTel = document.getElementById("phoneNumber");
  const cusInfo = {
    name: cusName.value,
    birth: cusBirth.value,
    cmnd: cusCMND.value,
    tel: cusTel.value,
  };
  container.appendChild(displayInfo(cusInfo));
  cusName.value = '';
  cusBirth.value = '';
  cusCMND.value = '';
  cusTel.value = '';
}

const button1 = document.getElementById("btn");
button1.onclick = getInfo;
