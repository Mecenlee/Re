import React, { useEffect, useState } from "react";
import { Image, Dimensions } from "react-native";
// 可变图片组件
type Props = {
    uri: string;
};

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const SHOW_WIDTH = SCREEN_WIDTH - 18 >> 1;
export default ({ uri }: Props) => {

    const [height, setHeight] = useState<number>(200);

    useEffect(() => {
        Image.getSize(uri, (width: number, height: number) => {
            const showHeight = SHOW_WIDTH * height / width;
            setHeight(showHeight);
        });
    }, [uri]);

    return (
        <Image
            source={{ uri: uri }}
            style={{
                width: SCREEN_WIDTH - 18 >> 1,
                height: height,
                resizeMode: 'cover',
            }}
        />
    );
}