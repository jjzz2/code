import { useSelector, useDispatch } from 'react-redux';
import { increment, fetchUser } from '../../store';
function Counter() {
  const count = useSelector((state) => state.count);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <div>
      <p>count:{count}</p>
      <p>user: {user ? user.name : 'No user fetched'}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(fetchUser(1))}>Fetch User</button>
    </div>
  )
}
export default function ReduxReview() {
  return (
    <div>
      <h1>Redux Review</h1>
      <Counter />
    </div>
  );
}