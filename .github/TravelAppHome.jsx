
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Globe, Plane, Car, Hotel, Search } from "lucide-react";

export default function TravelAppHome() {
  return (
    <div className="bg-slate-900 min-h-screen text-white p-4">
      <header className="flex justify-between items-center pb-4 border-b border-gray-700">
        <div className="text-xl font-bold">TRAVEL APP</div>
        <div className="flex gap-4 items-center">
          <span>VI | VND</span>
          <Button variant="ghost">Khuyến mãi</Button>
          <Button variant="ghost">Hỗ trợ</Button>
          <Button variant="ghost">Hợp tác</Button>
          <Button variant="ghost">Đặt chỗ của tôi</Button>
          <Button variant="outline">Đăng Nhập</Button>
          <Button className="bg-blue-500 text-white">Đăng Ký</Button>
        </div>
      </header>

      <div className="text-center mt-8">
        <h1 className="text-2xl font-bold">TRAVEL LUÔN ĐỒNG HÀNH CÙNG BẠN</h1>
      </div>

      <Tabs defaultValue="ai" className="mt-8">
        <TabsList className="grid grid-cols-7 gap-1">
          <TabsTrigger value="hotel">Khách sạn</TabsTrigger>
          <TabsTrigger value="flight">Vé máy bay</TabsTrigger>
          <TabsTrigger value="car">Vé xe</TabsTrigger>
          <TabsTrigger value="pickup">Đưa đón sân bay</TabsTrigger>
          <TabsTrigger value="ai">AI</TabsTrigger>
          <TabsTrigger value="fun">Hoạt động & Vui chơi</TabsTrigger>
          <TabsTrigger value="other">Khác</TabsTrigger>
        </TabsList>
      </Tabs>

      <Card className="mt-6">
        <CardContent className="p-6 grid grid-cols-1 md:grid-cols-5 gap-4">
          <Select>
            <SelectContent>
              <SelectItem value="oneway">Một chiều</SelectItem>
              <SelectItem value="round">Khứ hồi</SelectItem>
            </SelectContent>
          </Select>
          <Input placeholder="Từ (VD: TP HCM)" />
          <Input placeholder="Đến (VD: Hà Nội)" />
          <Calendar mode="single" className="bg-white text-black rounded-xl" />
          <Button className="bg-orange-500 hover:bg-orange-600">
            <Search className="w-4 h-4 mr-2" /> Tìm kiếm
          </Button>
        </CardContent>
      </Card>

      <div className="text-center text-sm text-gray-400 mt-4">
        Trusted by: Vietjet, Bamboo, Vietnam Airlines, Agoda...
      </div>

      <section className="bg-white text-black mt-10 p-6 rounded-xl shadow">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-purple-600">EPIC SALE</h2>
          <p className="text-lg">Deal tiết kiệm đi chơi Lễ – Giảm đến 500K</p>
          <Button className="bg-orange-500 mt-2">Tải app ngay</Button>
        </div>
        <div className="mt-6">
          <img src="/promo.jpg" alt="Promo" className="rounded-xl w-full" />
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-bold mb-4">Vé máy bay giá tốt nhất</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {["Hà Nội", "Đà Nẵng", "Quy Nhơn", "Huế", "Vinh"].map((city, index) => (
            <div key={index} className="bg-white text-black rounded-xl p-3 shadow">
              <div className="text-sm font-bold">MỘT CHIỀU</div>
              <img src="/notredame.jpg" alt="Flight" className="rounded-md my-2" />
              <p>{city} - TP HCM</p>
              <p className="text-orange-600 font-semibold">{(Math.random() * 1000000 + 400000).toFixed(0)} VND</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-4">
          <Button className="bg-sky-500 text-white">Xem thêm ưu đãi bay</Button>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-bold text-red-600">Hành trình AI</h2>
        <div className="flex gap-2 my-2">
          <Button variant="outline">Điểm tham quan</Button>
          <Button variant="outline">Tour</Button>
          <Button variant="outline">Sân chơi</Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {["Hội An", "Ninh Bình", "Hà Nội", "Nha Trang"].map((place, i) => (
            <div key={i} className="bg-white text-black rounded-xl p-3 shadow">
              <img src="/tour.jpg" alt={place} className="rounded-md mb-2" />
              <h3 className="text-md font-bold">{place}</h3>
              <p className="text-sm">{Math.floor(Math.random() * 200000)} VND</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-blue-50 text-black mt-10 p-6 rounded-xl text-center">
        <p className="text-lg font-semibold mb-2">Luôn được cập nhật các lời khuyên, đề xuất và khuyến mãi mới nhất</p>
        <Input placeholder="Địa chỉ email của bạn" className="max-w-sm mx-auto" />
        <Button className="mt-2 bg-orange-500 text-white">Đăng ký tin</Button>
      </section>

      <footer className="bg-slate-800 text-gray-300 mt-10 p-6 rounded-xl grid grid-cols-2 md:grid-cols-4 gap-4">
        <div>
          <h4 className="font-bold mb-2">Về Travel</h4>
          <ul>
            <li>Cách đặt chỗ</li>
            <li>Liên hệ</li>
            <li>Trợ giúp</li>
            <li>Tuyển dụng</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-2">Sản phẩm</h4>
          <ul>
            <li>Khách sạn</li>
            <li>Vé máy bay</li>
            <li>Đưa đón sân bay</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-2">Khác</h4>
          <ul>
            <li>Travel Blog</li>
            <li>Chính sách</li>
            <li>Điều khoản</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-2">Theo dõi</h4>
          <ul>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>TikTok</li>
            <li>Youtube</li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

export default function TravelApp() {
  const [showAIContent, setShowAIContent] = useState(false);

  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      {/* Header */}
      <div className="flex justify-between items-center p-4 bg-gray-800">
        <div className="text-xl font-bold">TRAVEL APP</div>
        <div className="space-x-4">
          <Button variant="outline">Đăng Nhập</Button>
          <Button>Đăng Ký</Button>
        </div>
      </div>

      {/* Nút AI để bật nội dung */}
      <div className="text-center my-6">
        <Button onClick={() => setShowAIContent(true)}>AI</Button>
      </div>

      {/* Nội dung chỉ hiển thị khi bấm AI */}
      {showAIContent && (
        <>
          {/* Tìm chuyến bay */}
          <div className="bg-gray-700 p-6 space-y-4">
            <h2 className="text-2xl font-semibold">TRAVEL LUÔN ĐỒNG HÀNH CÙNG BẠN</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Input placeholder="Từ (VD: TP HCM)" />
              <Input placeholder="Đến (VD: Hà Nội)" />
              <Input type="date" />
              <Button>Tìm kiếm</Button>
            </div>
          </div>

          {/* Gợi ý cuối tuần */}
          <div className="bg-white text-black p-6">
            <h2 className="text-lg font-semibold mb-2">Chào bạn, cuối tuần này bạn muốn đi đâu?</h2>
            <div className="flex space-x-6 justify-center">
              {["Núi", "Biển", "Đồng quê"].map((item) => (
                <div key={item} className="text-center">
                  <img src={`/${item}.jpg`} alt={item} className="w-24 h-24 rounded-full mx-auto" />
                  <div className="mt-2 font-bold">{item}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Lịch trình xanh */}
          <div className="bg-blue-50 text-black p-6">
            <h2 className="text-xl font-semibold mb-4">Lịch trình xanh cho bạn:</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardContent className="p-4">
                  <img src="/dalat.jpg" alt="Đà Lạt" className="rounded-lg" />
                  <h3 className="mt-2 font-bold">Đà Lạt cuối tuần</h3>
                  <ul className="list-disc ml-4 text-sm">
                    <li>Xe giường nằm</li>
                    <li>Homestay NL</li>
                    <li>Rừng thông</li>
                  </ul>
                  <a href="#" className="text-blue-500 underline mt-2 block">Xem thêm</a>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <img src="/nhatrang.jpg" alt="Nha Trang" className="rounded-lg" />
                  <h3 className="mt-2 font-bold">Nha Trang cuối tháng 5</h3>
                  <ul className="list-disc ml-4 text-sm">
                    <li>Máy bay</li>
                    <li>Homestay GB</li>
                    <li>Hoạt động biển</li>
                  </ul>
                  <a href="#" className="text-blue-500 underline mt-2 block">Xem thêm</a>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Đăng ký nhận tin */}
          <div className="bg-blue-700 text-white p-6 text-center">
            <h2 className="text-xl mb-2">Luôn được cập nhật về các lời khuyên và khuyến mãi mới nhất</h2>
            <div className="flex justify-center mt-2">
              <Input className="w-1/2" placeholder="Địa chỉ email của bạn" />
              <Button className="ml-2">Đăng ký tin</Button>
            </div>
          </div>

          {/* Footer */}
          <footer className="bg-gray-800 text-white p-6 text-sm">
            <div className="flex flex-col md:flex-row justify-between">
              <div>
                <h4 className="font-semibold mb-2">Về Travel</h4>
                <ul className="space-y-1">
                  <li>Cách đặt chỗ</li>
                  <li>Liên hệ</li>
                  <li>Trợ giúp</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Sản phẩm</h4>
                <ul className="space-y-1">
                  <li>Vé máy bay</li>
                  <li>Khách sạn</li>
                  <li>Cho thuê xe</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Kết nối</h4>
                <div className="flex space-x-2">
                  <img src="/facebook.svg" alt="Facebook" className="w-6 h-6" />
                  <img src="/tiktok.svg" alt="TikTok" className="w-6 h-6" />
                  <img src="/youtube.svg" alt="Youtube" className="w-6 h-6" />
                </div>
              </div>
            </div>
          </footer>
        </>
      )}
    </div>
  );
}
// File: TravelApp.jsx
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

export default function TravelApp() {
  const [showAISuggestion, setShowAISuggestion] = useState(false);

  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      {/* Header */}
      <div className="flex justify-between items-center p-4 bg-gray-800">
        <div className="text-xl font-bold">TRAVEL APP</div>
        <div className="space-x-4">
          <Button variant="outline">Đăng Nhập</Button>
          <Button>Đăng Ký</Button>
        </div>
      </div>

      {/* Tìm chuyến bay */}
      <div className="bg-gray-700 p-6 space-y-4">
        <h2 className="text-2xl font-semibold">TRAVEL LUÔN ĐỒNG HÀNH CÙNG BẠN</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Input placeholder="Từ (VD: TP HCM)" />
          <Input placeholder="Đến (VD: Hà Nội)" />
          <Input type="date" />
          <Button>Tìm kiếm</Button>
        </div>
      </div>

      {/* Gợi ý cuối tuần */}
      <div className="bg-white text-black p-6">
        <h2 className="text-lg font-semibold mb-2">Chào bạn, cuối tuần này bạn muốn đi đâu?</h2>
        <div className="flex space-x-6 justify-center">
          {["Núi", "Biển", "Đồng quê"].map((item) => (
            <div key={item} className="text-center">
              <img src={`/${item}.jpg`} alt={item} className="w-24 h-24 rounded-full mx-auto" />
              <div className="mt-2 font-bold">{item}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Lịch trình xanh */}
      <div className="bg-blue-50 text-black p-6">
        <h2 className="text-xl font-semibold mb-4">Lịch trình xanh cho bạn:</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardContent className="p-4">
              <img src="/dalat.jpg" alt="Đà Lạt" className="rounded-lg" />
              <h3
                className="mt-2 font-bold cursor-pointer text-blue-600 hover:underline"
                onClick={() => setShowAISuggestion(true)}
              >
                Đà Lạt cuối tuần
              </h3>
              <ul className="list-disc ml-4 text-sm">
                <li>Xe giường nằm</li>
                <li>Homestay NL</li>
                <li>Rừng thông</li>
              </ul>
              <a href="#" className="text-blue-500 underline mt-2 block">Xem thêm</a>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <img src="/nhatrang.jpg" alt="Nha Trang" className="rounded-lg" />
              <h3 className="mt-2 font-bold">Nha Trang cuối tháng 5</h3>
              <ul className="list-disc ml-4 text-sm">
                <li>Máy bay</li>
                <li>Homestay GB</li>
                <li>Hoạt động biển</li>
              </ul>
              <a href="#" className="text-blue-500 underline mt-2 block">Xem thêm</a>
            </CardContent>
          </Card>
        </div>

        {/* Gợi ý AI hiển thị khi bấm Đà Lạt */}
        {showAISuggestion && (
          <div className="bg-white text-black p-6 max-w-xl mx-auto mt-4 rounded-lg shadow-lg border border-blue-300">
            <h3 className="font-bold text-lg mb-2">AI đề xuất nhanh:</h3>
            <p>Đà Lạt cuối tuần - ngân sách 3 triệu:</p>
            <ul className="mt-2 space-y-2 text-sm">
              <li>🚌 Xe Limousine giường nằm (15kg CO2, tiết kiệm 20% so với máy bay)</li>
              <li>🏠 Homestay “Gỗ & Mây” - View rừng thông + bếp năng lượng mặt trời</li>
              <li>🌄 Sáng: trekking rừng thông (Miễn Phí)</li>
              <li>🥗 Trưa: Quán chay “Roots” (Nguyên liệu vườn nhà)</li>
              <li>🎨 Tối: Lớp làm gốm tái chế</li>
            </ul>
            <div className="mt-4 flex justify-end space-x-2">
              <Button variant="outline" onClick={() => setShowAISuggestion(false)}>Tùy chỉnh</Button>
              <Button>Đồng ý</Button>
            </div>
          </div>
        )}
      </div>

      {/* Đăng ký nhận tin */}
      <div className="bg-blue-700 text-white p-6 text-center">
        <h2 className="text-xl mb-2">Luôn được cập nhật về các lời khuyên và khuyến mãi mới nhất</h2>
        <div className="flex justify-center mt-2">
          <Input className="w-1/2" placeholder="Địa chỉ email của bạn" />
          <Button className="ml-2">Đăng ký tin</Button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-6 text-sm">
        <div className="flex flex-col md:flex-row justify-between">
          <div>
            <h4 className="font-semibold mb-2">Về Travel</h4>
            <ul className="space-y-1">
              <li>Cách đặt chỗ</li>
              <li>Liên hệ</li>
              <li>Trợ giúp</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Sản phẩm</h4>
            <ul className="space-y-1">
              <li>Vé máy bay</li>
              <li>Khách sạn</li>
              <li>Cho thuê xe</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Kết nối</h4>
            <div className="flex space-x-2">
              <img src="/facebook.svg" alt="Facebook" className="w-6 h-6" />
              <img src="/tiktok.svg" alt="TikTok" className="w-6 h-6" />
              <img src="/youtube.svg" alt="Youtube" className="w-6 h-6" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
import React, { useState } from "react";

export default function CO2Popup() {
  const [showPopup, setShowPopup] = useState(false);

  const handleAgree = () => {
    setShowPopup(true);
  };

  const handleClose = () => {
    setShowPopup(false);
  };

  return (
    <div className="p-6 flex flex-col items-center justify-center">
      <button
        onClick={handleAgree}
        className="bg-green-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-green-700 transition"
      >
        Đồng ý
      </button>

      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full text-center shadow-xl">
            <div className="text-6xl mb-4">✉️</div>
            <h2 className="text-lg font-semibold mb-2">Thông báo qua email</h2>
            <p className="mb-4 text-gray-700">
              Bạn sẽ nhận được email cho biết chuyến đi đã tiết kiệm được bao
              nhiêu CO<sub>2</sub> với ước tính ban đầu & số lượng cây.
            </p>
            <button
              onClick={handleClose}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Đóng
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
import React, { useState } from "react";

export default function TravelApp() {
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleToggleSuggestions = () => {
    setShowSuggestions(!showSuggestions);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Nút AI / Gợi ý */}
      <button
        onClick={handleToggleSuggestions}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Gợi ý AI
      </button>

      {/* Gợi ý cuối tuần */}
      {showSuggestions && (
        <div className="mt-6 bg-white p-6 rounded shadow-lg">
          <h2 className="text-red-600 font-bold text-xl mb-4">
            XIN CHÀO BẠN! CUỐI TUẦN NÀY BẠN MUỐN ĐI ĐÂU?
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {suggestions.map((item, index) => (
              <div key={index} className="text-center">
                <img src={item.image} alt={item.label} className="rounded-lg mb-2" />
                <p className="text-red-600 font-semibold">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

const suggestions = [
  {
    label: "Đồi chè cầu đất",
    image: "https://i.imgur.com/k1JZzQW.jpg"
  },
  {
    label: "Nhà ga cổ",
    image: "https://i.imgur.com/YZ9TtOJ.jpg"
  },
  {
    label: "Đồi hoa",
    image: "https://i.imgur.com/M8iSnHr.jpg"
  },
  {
    label: "Hồ Xuân Hương",
    image: "https://i.imgur.com/rIPX2d1.jpg"
  },
  {
    label: "Hành trình đêm Đà Lạt",
    image: "https://i.imgur.com/BEk08L6.jpg"
  },
  {
    label: "Quảng Trường",
    image: "https://i.imgur.com/Yl6jRYq.jpg"
  }
];
