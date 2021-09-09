function Tinhdiemtb()
{
 var x1=document.getElementById('diem1');
 var x2=document.getElementById('diem2');
 if(x1.value=='' && x2.value=='')
 {
  alert('Bạn đã nhập thiếu giá trị vào ô nhập liệu');
  }
 else if(x1.value=='')
 {
  alert('Bạn đã nhập thiếu giá trị ô nhập liệu thứ 1');
 }
 else if(x2.value=='')
 {
  alert('Bạn đã nhập thiếu giá trị ô nhập liệu thứ 2');
 }
 else if(isNaN(x1.value)&&isNaN(x2.value))
 {
  alert('Kí tự bạn nhập không phải là số');  
 }
 else if(isNaN(x1.value) )
 {
  alert('Kí tự bạn nhập không phải là số');  
 }
  else if(isNaN(x2.value))
 {
  alert('Kí tự bạn nhập không phải là số');  
 }
 var tb=document.getElementById('dtb');
 tb=(parseFloat(x2.value)-parseFloat(x1.value));
 if((tb>0)&&(tb<100))
 {
 	return 500*tb;
 }
 else
 	if (tb<=250) 
 	{
 		return (100 * 500) + (tb - 100) * 600;
 	}
 	else
 		if (tb<=300) 
 		{
 			return (100 * 500) + (250 * 600) + (tb - 250) * 800;
 		}
 		else
 			return (100 * 500) + (250 * 600) + (300 * 800) + (tb - 300) * 1000;
 		
}