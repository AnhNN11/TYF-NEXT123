import React from "react";

const articles = [
  {
    title: "Bé Thử Làm Họa Sĩ",
    date: "16 October 2024",
    description:
      "Bạn có biết rằng mỗi bức tranh bé vẽ đều chứa đựng một câu chuyện riêng của bé? 🖌️🎨 Hãy để con bạn tự do khám phá thế giới nghệ thuật với Lớp Nghệ Thuật đặc biệt của TYF - ngay tại nhà!",
    image: "/images/bai1.jpg",
    tags: ["draw"],
    link: "https://www.facebook.com/photo/?fbid=122098960028573635&set=a.122093195738573635",
  },
  {
    title: "Phương Pháp Bank Street",
    date: "14 October 2024",
    description:
      "Bạn đã từng nghe về phương pháp Bank Street chưa? Đây là một phương pháp giảng dạy tiên tiến, giúp các bé phát triển một cách toàn diện thông qua sự kết hợp giữa học tập và trải nghiệm thực tế",
    image: "/images/bai2.jpg",
    tags: ["bankstreet"],
    link: "https://www.facebook.com/photo/?fbid=122097354788573635&set=a.122097355652573635",
  },
  {
    title: "Khám Phá Thế Giới ",
    date: "9 October 2024",
    description:
      "Khi bạn là phụ huynh bận rộn, việc đảm bảo rằng con bạn có những trải nghiệm thú vị là điều không dễ dàng. TYF sẽ là người đồng hành đáng tin cậy trong hành trình khám phá thế giới của bé yêu!",
    image: "/images/bai3.jpg",
    tags: ["khampha"],
    link: "https://www.facebook.com/photo/?fbid=122093761688573635&set=a.122093195738573635",
  },
  {
    title: "Hành trình khám phá",
    date: "8 October 2024",
    description:
      "TYF ra đời với sứ mệnh mang đến cho các bé một cảm giác vui chơi, học tập và phát triển toàn diện. Đặc biệt, chúng tôi còn tạo ra những chuyến du lịch mini ngay tại trung tâm,",
    image: "/images/bai4.jpg",
    tags: ["phaitrien"],
    link: "https://www.facebook.com/photo/?fbid=122093209250573635&set=a.122093195738573635",
  },
];

const Blog: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-black p-10">
      <header className="text-5xl font-bold mb-10">
        <span className="text-black">Các bài viết liên quan</span>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-lg overflow-hidden shadow-lg"
          >
            <a href={article.link} target="_blank" rel="noopener noreferrer">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
            </a>
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">{article.title}</h2>
              <p className="text-gray-600 text-sm mb-4">{article.date}</p>
              <p className="mb-4">{article.description}</p>
              <div className="flex space-x-2">
                {article.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-blue-500 text-white text-xs px-2 py-1 rounded"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
