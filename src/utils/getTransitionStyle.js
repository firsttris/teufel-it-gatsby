const getTransitionStyles = timeout => {
  return {
    entering: {
      transform: 'translate3d(100%, 0, 0)',
      zIndex: 10
    },
    entered: {
      transform: 'translate3d(0, 0, 0)',
      transition: 'all 600ms'
    },
    exiting: {
      zIndex: 1
    },
  }
}

const getTransitionStyle = ({ timeout, status }) =>
  getTransitionStyles(timeout)[status]

export default getTransitionStyle
