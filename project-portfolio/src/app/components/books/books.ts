import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableModule } from 'primeng/table';
import { AccordionModule } from 'primeng/accordion';

interface Book {
  title: string;
  author: string;
  takeaways: string;
  imageurl: string;
}

@Component({
  selector: 'app-books',
  imports: [TableModule, AccordionModule, CommonModule],
  templateUrl: './books.html',
})
export class Books {
  protected readonly inProgessBooks: Book[] = [
    {
      title: 'Deep Learning',
      author: 'Ian Goodfellow, Yoshua Bengio, & Aaron Courville',
      takeaways: '',
      imageurl: '/assets/book-covers/deep-learning.webp',
    },
    {
      title: 'Structure and Interpretation of Computer Programs',
      author: 'Harold Abelson & Gerald Jay Sussman',
      takeaways: '',
      imageurl: '/assets/book-covers/structure-and-interpretation.webp',
    },
  ];

  protected readonly finishedBooks: Book[] = [
    {
      title: 'Clean Code',
      author: 'Robert C. Martin',
      takeaways:
        'There are many different ways to get the same short term outcomes when creating software and systems, but those decisions matter for long term maintainability, scalability, and success. From a development perspective, patterns and craftsmanship are equally important to functionality, even if they are not directly visible to end users.',
      imageurl: '/assets/book-covers/clean-code.webp',
    },
    {
      title: 'Clean Architecture',
      author: 'Robert C. Martin',
      takeaways:
        'A sequel to Clean Code, this book focuses on where we place boundaries in software and how to structure dependencies. I think that it is useful for knowing the possibilities, but it is also good to have this knowledge so you can look at existing systems and understand why things were done the way they were, and if there is an opportunity to improve them.',
      imageurl: '/assets/book-covers/clean-architecture.webp',
    },
    {
      title: 'How to Make Things Faster',
      author: 'Cary Millsap',
      takeaways:
        'At its core, this book is about how to approach and think about problems. It emphasizes finding and fixing the root causes of problems rather than being concerned with symptoms. I believe that businesses and the systems we create for them primarily exist to solve problems, so I enjoy learning about different perspectives on effective problem solving strategies.',
      imageurl: '/assets/book-covers/how-to-make-things-faster.webp',
    },
    {
      title: 'The Nvida Way',
      author: 'Tae Kim',
      takeaways:
        'A biography of Nvidia and its CEO, Jensen Haung. A look into a company that has a different culture than most, with an emphasis on excellence and hard-work, at the cost of work-life balance. While Nvidia’s strategies are likely not applicable for most companies, I thought there were interesting takeaways on how to get work done quickly and effectively.',
      imageurl: '/assets/book-covers/the-nvidia-way.webp',
    },
    {
      title: 'The Phoenix Project',
      author: 'Gene Kim, Kevin Behr, & George Spafford',
      takeaways:
        'This book is about the challenges that IT departments can face in organizations when the proper goals are not prioritized. I thought it was interesting because I drew parallels to situations that I have seen at work as I read it, and it was a good reminder of the importance of communication and common goals when working with technology.',
      imageurl: '/assets/book-covers/the-phoenix-project.webp',
    },
    {
      title: 'Tidy First?',
      author: 'Kent Beck',
      takeaways:
        'This book reinforced something that I always try to keep in mind when I work - the little things matter a lot. Whether it be in software development or just the completion of simple tasks, I think it important to keep an eye on the details while working toward a larger goal.',
      imageurl: '/assets/book-covers/tidy-first.webp',
    },
    {
      title: 'Designing Data-Intensive Applications',
      author: 'Martin Kleppmann',
      takeaways:
        'I read this book because I was interested in learning more about the fundamentals of distributed systems. I enjoyed how it covered potential challenges in databases, applications, and networks. Since I read it, I have had the opportunity to apply concepts from the book into real systems and I hope to continue building my knowledge and experience with distributed systems.',
      imageurl: '/assets/book-covers/designing-data-intensive-applications.webp',
    },
  ];
}
