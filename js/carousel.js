(function(){

  var carousel_list=document.getElementById('carousel_list')
  var left_btn=document.getElementById('left_btn')
  var right_btn=document.getElementById('right_btn')

  var clone_li=carousel_list.firstElementChild.cloneNode(true)
  carousel_list.appendChild(clone_li)

  var idx=0;

  right_btn.onclick=function(){
    carousel_list.style.transition='transform .5s ease 0s';
    idx++
    carousel_list.style.transform='translateX('+-16.666*idx+'%)';
    if(idx>4){
      setTimeout(function(){
        carousel_list.style.transition='none';
        idx=0;
        carousel_list.style.transform='none';

      },500)
    }
  }

  left_btn.onclick=function(){
    if(idx==0){
      carousel_list.style.transition='none'
      carousel_list.style.transform='translateX('+-16.666*5+'%)';
      setTimeout(function(){
        carousel_list.style.transition='transform .5s ease 0s';
        idx=4
        carousel_list.style.transform='translateX('+-16.666*idx+'%)';

      },0)
    }else{
      idx--;
      carousel_list.style.transform='translateX('+-16.666*idx+'%)';
    }
    

  }
})()