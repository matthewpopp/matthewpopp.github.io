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
      title: "Deep Learning",
      author: "Ian Goodfellow, Yoshua Bengio, & Aaron Courville",
      takeaways: "",
      imageurl: "/assets/book-covers/deep-learning.webp"
    },
    {
      title: "Structure and Interpretation of Computer Programs",
      author: "Harold Abelson & Gerald Jay Sussman",
      takeaways: "",
      imageurl: "/assets/book-covers/structure-and-interpretation.webp"
    },
  ]

  protected readonly finishedBooks: Book[] = [
    {
      title: "Clean Architecture",
      author: "Robert C. Martin",
      takeaways: "",
      imageurl: "/assets/book-covers/clean-architecture.webp"
    },
    {
      title: "Clean Code",
      author: "Robert C. Martin",
      takeaways: "",
      imageurl: "/assets/book-covers/clean-code.webp"
    },
    {
      title: "How to Make Things Faster",
      author: "Cary Millsap",
      takeaways: "",
      imageurl: "/assets/book-covers/how-to-make-things-faster.webp"
    },
    {
      title: "The Nvida Way",
      author: "Tae Kim",
      takeaways: "",
      imageurl: "/assets/book-covers/the-nvidia-way.webp"
    },
    {
      title: "The Phoenix Project",
      author: "Gene Kim, Kevin Behr, & George Spafford",
      takeaways: "",
      imageurl: "/assets/book-covers/the-phoenix-project.webp"
    },
    {
      title: "Tidy First?",
      author: "Kent Beck",
      takeaways: "",
      imageurl: "/assets/book-covers/tidy-first.webp"
    },
    {
      title: "Designing Data-Intensive Applications",
      author: "Martin Kleppmann",
      takeaways: "",
      imageurl: "/assets/book-covers/designing-data-intensive-applications.webp"
    }
  ]
}
