import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";


type Props = {
    params: { locale: string };
};

export default function PathnamesPage({ params: { locale } }: Props) {
    // Enable static rendering
    unstable_setRequestLocale(locale);

    const t = useTranslations();

    return (
            <div className="max-w-[490px]">
                {t.rich("articles", {
                    p: (chunks) => <p className="mt-4">{chunks}</p>,
                    code: (chunks) => (
                        <code className="font-mono text-white">{chunks}</code>
                    ),
                })}
								<p className="text-white">
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio omnis ratione magni corporis debitis delectus sint cumque voluptates mollitia eligendi. Eligendi vero ea cumque. Inventore sed atque nihil, voluptatum natus quidem obcaecati eius voluptates laboriosam minima quasi eligendi iure perspiciatis impedit consectetur, itaque mollitia eveniet reiciendis iusto non ea modi. Doloribus, at ea? Totam ducimus nisi harum minima culpa quas cum, rerum veniam, fugit maiores in. Officia distinctio eum vel, pariatur molestias, odit, sed ipsam assumenda maiores suscipit veniam corporis. Qui tenetur inventore totam deserunt. Error ad exercitationem eligendi veritatis iste, ipsam a cum quis, praesentium earum repellat in laboriosam?
								</p>
            </div>

    );
}
