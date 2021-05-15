import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store/index'

function Counter() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const show = useSelector((state => state.showCounter))

  const increaseHandler = () => {
    dispatch(counterActions.increase(10));
  };

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const toggleHandler = () => {
    dispatch(counterActions.toggle())
  }

  return (
    <main>
      <h1>Redux Counter</h1>
      {show ? <div>--- {counter} ---</div> : ''}      
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={increaseHandler}>Increase</button>
      </div>
      <button onClick={toggleHandler}>Toggle Counter</button>
    </main>
  );
}

// class Counter extends Component {
//   incrementHandler() {

//   }

//   decrementHandler() {

//   }

//   toggleCounterHandler() {

//   }

//   render() {
//     return (
//       <main>
//         <h1>Redux Counter</h1>
//         <div>--- {counter} ---</div>
//         <div>
//           <button onClick={this.incrementHandler}>Increment</button>
//           <button onClick={this.decrementHandler}>Decrement</button>
//         </div>
//         <button>Toggle Counter</button>
//       </main>
//     );
//   }
// }

export default Counter;
