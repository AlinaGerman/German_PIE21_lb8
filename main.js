var posts=document.getElementById('main_div')

fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then((data) => {
    for (let i=0;i<data.length;i++){
        let div = document.createElement('div');
        div.className='post';
        let h=document.createElement('h3');
        h.className='text_title_post';
        h.textContent=data[i].title;
        let p=document.createElement('p');
        p.className='text_post';
        p.textContent=data[i].body;
        div.append(h);
        div.append(p);
        posts.append(div);
    }
});
