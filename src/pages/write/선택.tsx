import { css } from '@emotion/react';
import { paperTypeState } from '@state/paperType';
import { useAtom } from 'jotai';

const 선택 = () => {

    const [paperTypeAtom, setPaperTypeAtom] = useAtom(paperTypeState);

    return (
        <div css={css`
            width: 100%;
            height: 50vh;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: scroll;
            flex-wrap: wrap;
            padding-bottom: 70px;
            gap: 20px;
            // TODO: 스크롤 지우기
        `}>
            <label htmlFor='모눈종이'>
                <div css={css`
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                gap: 16px;
            `} onClick={() => setPaperTypeAtom('모눈종이')}>
                    <img src={`/monunpaper${paperTypeAtom === '모눈종이' ? '_selected' : ''}.png`} alt='모눈종이 선택지' />
                    <div css={css`
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: 8px;
                `}>
                        <input type='radio' value={'모눈종이'} name='papertype' id='모눈종이' />
                        모눈종이
                    </div>
                </div>
            </label>
            <label htmlFor='줄노트'>
                <div css={css`
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                gap: 16px;
            `} onClick={() => setPaperTypeAtom('줄노트')}>
                    <img src={`/linenote${paperTypeAtom === '줄노트' ? '_selected' : ''}.png`} alt='줄노트 선택지' />
                    <div css={css`
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: 8px;
                `}>
                        <input type='radio' value={'줄노트'} name='papertype' id='줄노트' />
                        줄노트
                    </div>
                </div>
            </label>

        </div>
    );
};

export default 선택;