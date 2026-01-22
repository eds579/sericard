'use client'

import { useEffect, useState } from 'react'
import { CheckCircle } from 'lucide-react'
import Container from '@/components/common/Container'
import Section from '@/components/common/Section'
import SectionTitle from '@/components/common/SectionTitle'

// 가상의 실시간 처리 현황 데이터
const generateRandomStatus = () => {
  const names = ['김**', '이**', '박**', '최**', '정**', '강**', '조**', '윤**', '장**', '임**']
  const amounts = ['50만원', '100만원', '150만원', '200만원', '80만원', '120만원', '70만원', '90만원']
  const times = ['방금 전', '1분 전', '2분 전', '3분 전', '5분 전']

  return {
    name: names[Math.floor(Math.random() * names.length)],
    amount: amounts[Math.floor(Math.random() * amounts.length)],
    time: times[Math.floor(Math.random() * times.length)],
  }
}

const initialStatuses = Array.from({ length: 5 }, generateRandomStatus)

export default function LiveStatus() {
  const [statuses, setStatuses] = useState(initialStatuses)

  useEffect(() => {
    const interval = setInterval(() => {
      setStatuses(prev => {
        const newStatus = generateRandomStatus()
        return [newStatus, ...prev.slice(0, 4)]
      })
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <Section bgColor="gray">
      <Container>
        <SectionTitle
          title="실시간 처리 현황"
          subtitle="지금 이 순간에도 고객님들이 세리카드를 이용하고 있습니다"
        />

        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            {/* Header */}
            <div className="bg-primary-600 px-6 py-4">
              <div className="flex items-center justify-between text-white text-sm font-medium">
                <span>고객명</span>
                <span>금액</span>
                <span>상태</span>
              </div>
            </div>

            {/* Status List */}
            <div className="divide-y divide-gray-100">
              {statuses.map((status, index) => (
                <div
                  key={index}
                  className={`px-6 py-4 flex items-center justify-between transition-all duration-500 ${
                    index === 0 ? 'bg-green-50' : ''
                  }`}
                >
                  <span className="text-gray-900 font-medium">{status.name}</span>
                  <span className="text-primary-600 font-bold">{status.amount}</span>
                  <div className="flex items-center gap-2 text-green-600">
                    <CheckCircle className="w-5 h-5" />
                    <span className="text-sm font-medium">입금완료</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="bg-gray-50 px-6 py-3 text-center">
              <span className="text-gray-500 text-sm">
                실시간 업데이트 중 • {statuses[0]?.time}
              </span>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
