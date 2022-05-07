export default function descriptor(obj) {
  const data = obj.special;
  let result = [];
  data.forEach((elem) => {
  	if(!elem.hasOwnProperty('description')) {
  		elem.description = 'Описание недоступно';
  	}
  	result.push(elem);
  });

  return result;
}
