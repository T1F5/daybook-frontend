import Button from "../components/common/Button";

const Home = () => {
    return (
        <div>
            <Button onClick={() => console.log('버튼 클릭')}>버튼테스트</Button>
        </div>
    );
};

export default Home;