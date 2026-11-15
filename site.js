(function(){
  var b=document.querySelector('.burger'),m=document.querySelector('.menu');
  if(b&&m){b.addEventListener('click',function(){m.classList.toggle('open')})}
})();

(function(){
  var f=document.getElementById('contact-form');
  if(!f)return;
  f.addEventListener('submit',function(e){
    e.preventDefault();
    var d=new FormData(f),body='Name: '+d.get('name')+'
Email: '+d.get('email')+'
Phone: '+(d.get('phone')||'-')+'

'+d.get('message');
    window.location.href='mailto:jazmyn@vbuildgroup.net?subject='+encodeURIComponent('Website enquiry from '+d.get('name'))+'&body='+encodeURIComponent(body);
    var n=document.getElementById('form-note');if(n)n.textContent='Thanks! Your email app should open with your message ready to send.';
  });
})();
