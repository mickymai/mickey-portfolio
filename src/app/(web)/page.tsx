import Layout from '@/components/Layout'
import {load} from 'outstatic/server'
import ContentGrid from '@/components/ContentGrid'
import markdownToHtml from '@/lib/markdownToHtml'
import Header from "@/components/Header";
import ImageSlider from "@/components/ImageSlider";

export default async function Index() {
    const {diHocVideos, diLamVideos, diDuLichVideos, phongCachSongVideos, phongCachSongPosts, diHocPosts, diLamPosts, diDuLichPosts} = await getData()
    const images = [
        '/images/banner1.jpg',
        '/images/banner2.jpg',
        '/images/banner3.jpg'
    ]

    return (
        <Layout>
            <Header/>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-12 max-w-7xl mx-auto md:mt-40 mt-4 md:px-0 px-8">
                <div className="image-slider-container">
                    <ImageSlider images={images}/>
                </div>
                <div className="banner-content flex flex-col gap-6 justify-between">
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
            <div className="max-w-7xl mx-auto md:pt-40 md:px-0 px-8 pt-10" id="di-hoc">
                {diHocPosts.length > 0 && (
                    <ContentGrid
                        title="#Micky đi học"
                        subtitle="Bài viết"
                        items={diHocPosts}
                        collection="di-hoc"
                        priority
                    />
                )}
                {diHocVideos.length > 0 && (
                    <ContentGrid
                        subtitle="Video"
                        items={diHocVideos}
                        collection="di-hoc-video"
                    />
                )}
            </div>
            <div className="max-w-7xl mx-auto pt-40" id="di-lam">
                {diLamPosts.length > 0 && (
                    <ContentGrid
                        title="#Micky đi làm"
                        subtitle="Bài viết"
                        items={diLamPosts}
                        collection="di-lam"
                        priority
                    />
                )}
                {diLamVideos.length > 0 && (
                    <ContentGrid
                        subtitle="Video"
                        items={diLamVideos}
                        collection="di-lam-video"
                    />
                )}
            </div>
            <div className="max-w-7xl mx-auto pt-40" id="di-du-lich">
                {diDuLichPosts.length > 0 && (
                    <ContentGrid
                        title="#Micky đi du lịch"
                        subtitle="Bài viết"
                        items={diDuLichPosts}
                        collection="di-du-lich"
                        priority
                    />
                )}
                {diDuLichVideos.length > 0 && (
                    <ContentGrid
                        subtitle="Video"
                        items={diDuLichVideos}
                        collection="di-du-lich-video"
                    />
                )}
            </div>
            <div className="max-w-7xl mx-auto pt-40" id="phong-cach-song">
                {phongCachSongPosts.length > 0 && (
                    <ContentGrid
                        title="#Phong cách sống"
                        subtitle="Bài viết"
                        items={phongCachSongPosts}
                        collection="phong-cach-song"
                        priority
                    />
                )}
                {phongCachSongVideos.length > 0 && (
                    <ContentGrid
                        subtitle="Video"
                        items={phongCachSongVideos}
                        collection="phong-cach-song-video"
                    />
                )}
            </div>
        </Layout>
    )
}

async function getData() {
    const db = await load()

    const diHocPosts = await db
        .find({collection: 'di-hoc'}, [
            'title',
            'publishedAt',
            'slug',
            'coverImage',
            'description',
            'tags'
        ])
        .sort({publishedAt: -1})
        .toArray()

    const diLamPosts = await db
        .find({collection: 'di-lam'}, [
            'title',
            'publishedAt',
            'slug',
            'coverImage',
            'description',
            'tags'
        ])
        .sort({publishedAt: -1})
        .toArray()

    const diDuLichPosts = await db
        .find({collection: 'di-du-lich'}, [
            'title',
            'publishedAt',
            'slug',
            'coverImage',
            'description',
            'tags'
        ])
        .sort({publishedAt: -1})
        .toArray()

    const phongCachSongPosts = await db
        .find({collection: 'phong-cach-song'}, [
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

    const diHocVideos = await db
        .find({collection: 'di-hoc-video'}, ['title', 'slug', 'coverImage', 'youtubeUrl', 'description'])
        .sort({publishedAt: -1})
        .toArray()

    const diLamVideos = await db
        .find({collection: 'di-lam-video'}, ['title', 'slug', 'coverImage', 'youtubeUrl', 'description'])
        .sort({publishedAt: -1})
        .toArray()

    const diDuLichVideos = await db
        .find({collection: 'di-du-lich-video'}, ['title', 'slug', 'coverImage', 'youtubeUrl', 'description'])
        .sort({publishedAt: -1})
        .toArray()

    const phongCachSongVideos = await db
        .find({collection: 'phong-cach-song-video'}, ['title', 'slug', 'coverImage', 'youtubeUrl', 'description'])
        .sort({publishedAt: -1})
        .toArray()

    return {
        diHocPosts,
        diLamPosts,
        diDuLichPosts,
        phongCachSongPosts,
        allVideos,
        diHocVideos,
        diLamVideos,
        diDuLichVideos,
        phongCachSongVideos
    }
}
