import { notFound } from "next/navigation";
import { getMemberBySlug, AAA_CLAN_MEMBERS, getMemberImage } from "../../data/data-biodata";
import ProfileClient from "./ProfileClient";

// Pre-render pages for all known members
export function generateStaticParams() {
  return AAA_CLAN_MEMBERS.map((member) => ({
    slug: member.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const member = getMemberBySlug(slug);
  if (!member) return { title: "Not Found | AAA CLAN" };

  const image = getMemberImage(slug);
  const bioDesc = member.bio.substring(0, 160) + (member.bio.length > 160 ? "..." : "");

  return {
    title: `${member.namaPanggung}`,
    description: `Official profile for ${member.namaLengkap} - ${member.grup ? member.grup : "AAA CLAN member"}`,
    openGraph: {
      title: `${member.namaPanggung} | AAA CLAN`,
      description: bioDesc,
      url: `/members/${slug}`,
      images: [
        {
          url: `/images/member/${image}`,
          width: 800,
          height: 800,
          alt: member.namaPanggung,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${member.namaPanggung} | AAA CLAN`,
      description: bioDesc,
      images: [`/images/member/${image}`],
    },
  };
}

export default async function MemberProfilePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const member = getMemberBySlug(slug);

  if (!member) return notFound();

  return (
    <main className="min-h-screen bg-[#fafaf8] overflow-hidden">
      <ProfileClient member={member} />
    </main>
  );
}
