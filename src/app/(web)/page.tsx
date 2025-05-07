import Layout from '@/components/Layout'
import {load} from 'outstatic/server'
import ContentGrid from '@/components/ContentGrid'
import markdownToHtml from '@/lib/markdownToHtml'
import Header from "@/components/Header";
import ImageSlider from "@/components/ImageSlider";

export default async function Index() {
    const {content, allPosts, allVideos} = await getData()
    const images = [
        '/images/banner1.jpg',
        '/images/banner2.jpg',
        '/images/banner3.jpg'
    ]

    return (
        <Layout>
            <Header/>
            <div className="grid grid-cols-2 gap-12 max-w-7xl mx-auto mt-40">
                <div className="image-slider-container">
                    <ImageSlider images={images}/>
                </div>
                <div className="banner-content flex flex-col gap-6">
                    <h2 className="font-[Cormorant_Garamond] text-2xl italic font-light">XIN CHÀO!</h2>
                    <p>
                        Tôi là Micky Mai, một người đam mê truyền thông và luôn tìm kiếm cơ hội để học hỏi, khám phá và đóng góp cho cộng đồng.
                        <br/>
                        <br/>
                        Tôi tốt nghiệp THPT Chuyên Hoàng Lê Kha (Tây Ninh) và nhận được Học bổng Nguyễn Văn Đạo của Đại học FPT, theo học chuyên ngành <strong>Business Administration in Marketing</strong> trong suốt 4 năm. Không chỉ giới hạn bản thân trong giảng đường, tôi từng có hơn <strong>2 tháng tham gia tình nguyện tại Thái Lan</strong> cùng AIESEC, cũng như <strong>6 tháng thực tập tại viện Incubation thuộc Pandit Deendayal Petroleum University</strong> ở Ấn Độ.
                        <br/>
                        <br/>
                        Hành trình làm việc của tôi bắt đầu tại <strong>Lãnh sự quán Hà Lan – Hiệp hội Doanh nghiệp Hà Lan</strong>, phụ trách mảng truyền thông & sự kiện. Sau đó, tôi dành <strong>4 năm</strong> để phát triển chuyên môn trong lĩnh vực <strong>truyền thông y tế và giáo dục</strong> cho các dự án phi chính phủ, phi lợi nhuận tại Việt Nam. Các chiến dịch tôi tham gia đều hướng đến việc nâng cao nhận thức cộng đồng và hỗ trợ những nhóm yếu thế tiếp cận thông tin, dịch vụ y tế thiết yếu.
                        <br/>
                        <br/>
                        Với mong muốn đào sâu hơn về truyền thông xã hội và phát triển bền vững, tôi vinh dự nhận được <strong>Học bổng Chính phủ Úc</strong> và hiện đang theo học <strong>Thạc sĩ Truyền thông tại Đại học Queensland</strong>.
                        <br/>
                        <br/>
                        Bên cạnh công việc và học tập, tôi yêu thích <strong>du lịch, khám phá những nền văn hóa mới</strong> và luôn tìm cách cân bằng giữa sự nghiệp và cuộc sống. Với tôi, mỗi trải nghiệm đều là một cơ hội để phát triển và đóng góp nhiều hơn cho cộng đồng.
                    </p>
                    <button className="font-bold border rounded-4xl p-2 text-white bg-black w-full hover:cursor-pointer">
                        Hành trình của tôi
                    </button>
                </div>
            </div>
            <div className="max-w-7xl mx-auto pt-40" id="di-hoc">
                {allPosts.length > 0 && (
                    <ContentGrid
                        title="#Micky đi học"
                        subtitle="Bài viết"
                        items={allPosts}
                        collection="posts"
                        priority
                    />
                )}
                {allVideos.length > 0 && (
                    <ContentGrid
                        subtitle="Video"
                        items={allVideos}
                        collection="video"
                    />
                )}
            </div>
            <div className="max-w-7xl mx-auto pt-40" id="di-lam">
                {allPosts.length > 0 && (
                    <ContentGrid
                        title="#Micky đi làm"
                        subtitle="Bài viết"
                        items={allPosts}
                        collection="posts"
                        priority
                    />
                )}
                {allVideos.length > 0 && (
                    <ContentGrid
                        subtitle="Video"
                        items={allVideos}
                        collection="video"
                    />
                )}
            </div>
            <div className="max-w-7xl mx-auto pt-40" id="di-du-lich">
                {allPosts.length > 0 && (
                    <ContentGrid
                        title="#Micky đi du lịch"
                        subtitle="Bài viết"
                        items={allPosts}
                        collection="posts"
                        priority
                    />
                )}
                {allVideos.length > 0 && (
                    <ContentGrid
                        subtitle="Video"
                        items={allVideos}
                        collection="video"
                    />
                )}
            </div>
            <div className="max-w-7xl mx-auto pt-40" id="phong-cach-song">
                {allPosts.length > 0 && (
                    <ContentGrid
                        title="#Phong cách sống"
                        subtitle="Bài viết"
                        items={allPosts}
                        collection="posts"
                        priority
                    />
                )}
                {allVideos.length > 0 && (
                    <ContentGrid
                        subtitle="Video"
                        items={allVideos}
                        collection="video"
                    />
                )}
            </div>
        </Layout>
    )
}

async function getData() {
    const db = await load()

    const page = await db
        .find({collection: 'pages', slug: 'home'}, ['content'])
        .first()

    const content = await markdownToHtml(page.content)

    const allPosts = await db
        .find({collection: 'posts'}, [
            'title',
            'publishedAt',
            'slug',
            'coverImage',
            'description',
            'tags'
        ])
        .sort({publishedAt: -1})
        .toArray()

    const allVideos = await db
        .find({collection: 'video'}, ['title', 'slug', 'coverImage', 'youtubeUrl', 'description'])
        .sort({publishedAt: -1})
        .toArray()

    return {
        content,
        allPosts,
        allVideos
    }
}
