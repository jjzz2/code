import { useNavigate } from 'react-router-dom';
function ReduxReview() {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1); // 返回到上一个页面
    };
  const goUser = () => {
        navigate('/user/1'); // 跳转到用户页面
    }
    return (
        <div>
            <h1>Redux Review</h1>
        <button onClick={handleGoBack}>返回</button>
        <button onClick={goUser}>跳转到用户页面</button>
        </div>
    );
}
export default ReduxReview;