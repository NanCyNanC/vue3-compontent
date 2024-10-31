import React, { useState } from 'react';

interface Dish {
  name: string;
  type: string;
}

const dishes: Dish[] = [
  { name: '红烧肉', type: '肉类' },
  { name: '麻婆豆腐', type: '豆制品' },
  { name: '宫保鸡丁', type: '肉类' },
  { name: '水煮鱼', type: '海鲜' },
  { name: '炒青菜', type: '素菜' },
  { name: '蛋炒饭', type: '主食' },
  { name: '酸辣汤', type: '汤类' },
  { name: '小笼包', type: '点心' },
  { name: '担担面', type: '面食' },
  { name: '回锅肉', type: '肉类' }
];

export function FoodRecommender() {
  const [recommendation, setRecommendation] = useState<Dish | null>(null);

  const getRecommendation = () => {
    const randomIndex = Math.floor(Math.random() * dishes.length);
    setRecommendation(dishes[randomIndex]);
  };

  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">今天吃什么？</h2>
      <button
        onClick={getRecommendation}
        className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors"
      >
        随机推荐
      </button>
      {recommendation && (
        <div className="mt-6">
          <p className="text-xl">推荐您吃：</p>
          <p className="text-3xl font-bold text-red-600 mt-2">{recommendation.name}</p>
          <p className="text-gray-600 mt-1">类型：{recommendation.type}</p>
        </div>
      )}
    </div>
  );
}