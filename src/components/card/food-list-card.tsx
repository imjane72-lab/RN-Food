import { Heart, Star } from "lucide-react-native";
import { Image, Pressable, Text, View } from "react-native";

export const FoodListCard = ({ name, desc, location, score, reviewCount, isOpen, img }: any) => (
    <Pressable className="flex-row mb-6 items-start gap-4">
        {/* 1. 이미지 영역: 고정 높이 */}
        <View>
            <Image source={{ uri: img }} className="w-24 h-24 rounded-2xl" />
            {!isOpen && (
                <View className="absolute inset-0 bg-black/40 rounded-2xl items-center justify-center">
                    <Text className="text-white text-[12px] font-bold">준비중</Text>
                </View>
            )}
        </View>

        {/* 2. 정보 영역: 이미지와 동일한 높이(h-24) 확보 후 justify-between */}
        <View className="flex-1 h-24 justify-between py-0.5">
            {/* 상단 파트: 이름, 하트, 설명 */}
            <View>
                <View className="flex-row justify-between items-center mb-1">
                    <Text className="text-neutral-900 text-[17px] font-bold flex-1" numberOfLines={1}>
                        {name}
                    </Text>
                    <Heart size={18} color="#CBD5E1" />
                </View>
                <Text className="text-neutral-500 text-[13px]" numberOfLines={1}>
                    {desc}
                </Text>
            </View>

            {/* 하단 파트: 별점, 리뷰, 위치, 영업상태 (이미지 바닥에 붙음) */}
            <View className="flex-row items-center justify-between">
                <View className="flex-row items-center">
                    <Star size={14} color="#F97316" fill="#F97316" />
                    <Text className="ml-1 text-neutral-900 font-bold text-[13px]">{score}</Text>
                    <Text className="ml-1.5 text-neutral-400 text-[12px]">({reviewCount})</Text>
                    {/* 구분선 */}
                    <View className="mx-2 w-px h-3 bg-neutral-200" />
                    <Text className="text-neutral-500 text-[12px]" numberOfLines={1}>
                        {location}
                    </Text>
                </View>

                {/* 영업 상태 배지 */}
                <View className={`px-2.5 py-1 rounded ${isOpen ? "bg-green-50" : "bg-neutral-50"}`}>
                    <Text className={`text-xs font-bold ${isOpen ? "text-green-600" : "text-neutral-500"}`}>{isOpen ? "영업 중" : "오픈 전"}</Text>
                </View>
            </View>
        </View>
    </Pressable>
);
