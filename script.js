const wrap = document.createElement('div')
wrap.classList.add('wrapper')
document.body.prepend(wrap)

for (let i=0;i<8;i++) {
    const newLine = document.createElement('div');
    newLine.classList.add('new-line')
    document.querySelector('body>div.wrapper').prepend(newLine);
    for (let j=0;j<8;j++) {
        const container = document.createElement('div');
        container.classList.add('rect')
        if (i % 2 === 0 || i === 0){
            if (j % 2 === 0 || j === 0) {
                container.classList.add('white')            
            } else {
                container.classList.add('black')            
            }
        } else {
            if (j % 2 == 0 || j === 0) {
                container.classList.add('black')            
            } else {
                container.classList.add('white')            
            }
        }
        document.querySelector(`body>div.wrapper>div:nth-child(1)`).prepend(container);
    }
}