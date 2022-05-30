const wrapper = document.querySelector('.wrapper');

const crateBlok = (num) => {
  for (let i = 0; i < num; i++) {
    const newBlock = document.createElement('div');
    newBlock.classList.add('blocks');
    newBlock.style.height = `${10 + (i * 3)}vh`
    newBlock.style.order = `${i+1}`;
    newBlock.style.background = `#${111111 + (i * 2)}`;

    wrapper.append(newBlock);

  }
};

crateBlok(20)

const blocks = document.querySelectorAll('.blocks');

const random = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const shake = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    arr[i].style.order = `${random(0, 20)}`;
  }
}

wrapper.addEventListener('click', () => {
  shake(blocks);
})



