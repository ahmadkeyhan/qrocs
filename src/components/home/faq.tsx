import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../ui/accordion"
import { questions } from "./questions"

export default function Faq() {
    return (
        <div className="relative flex flex-col items-center gap-6 w-full py-6 mb-6 bg-gradient-to-b from-background to-foreground/5">
            <h2 className="text-3xl text-primary">سوالات متداول</h2>
            <Accordion type="multiple" className="w-full max-w-4xl px-4 space-y-2">
                {questions.map((question,index) => (
                    <AccordionItem
                        key={`${question.question}${index}`}
                        value={`${question.question}${index}`}
                        className="relative bg-background rounded-2xl overflow-hidden px-4"
                    >
                        <AccordionTrigger>
                            <p className="text-start">{question.question}</p>
                        </AccordionTrigger>
                        <AccordionContent>
                            <p>{question.answer}</p>
                        </AccordionContent>
                        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-border to-transparent" />
                        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-border to-transparent" />
                        <div className="absolute bottom-0 top-0 left-0 w-[1px] bg-gradient-to-b from-transparent via-border to-transparent" />
                        <div className="absolute bottom-0 top-0 right-0 w-[1px] bg-gradient-to-b from-transparent via-border to-transparent" />
                    </AccordionItem>
                ))}
            </Accordion>
            <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-border to-transparent" />
        </div>
    )
}