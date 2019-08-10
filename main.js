initial()

let n = 1
setInterval(() => {
  makeLeave($('.images > img:nth-child(' + x(n) + ')')).one('transitionend', (e) => {
    makeEnter($(e.currentTarget))
  })
  makeCurrent($('.images > img:nth-child(' + x(n + 1) + ')'))
  n += 1
}, 1000)

function x(n) {
  if (n > 4) {
    n = n % 4
    if (n === 0) {
      n = 4
    }
  }
  return n
}

function initial() {
  let n = 1
  $('.images > img:nth-child(' + n + ')').addClass('current').siblings().addClass('enter')
}

function makeCurrent($node) {
  $node.removeClass('enter leave').addClass('current')
  return $node
}

function makeLeave($node) {
  $node.removeClass('current enter').addClass('leave')
  return $node
}

function makeEnter($node) {
  $node.removeClass('current leave').addClass('enter')
  return $node
}
