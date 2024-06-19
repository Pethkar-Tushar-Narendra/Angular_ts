import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  public title = 'sevices';
  public data: any;
  public errorMessage: any;
  constructor(private jsonPlaceholderService: DataService) {}
  ngOnInit() {
    this.getPosts();
  }
  // Function to format item
  formatItem(item: any): string {
    return `ID: ${item.userId}, Name: ${item.id}, Description: ${item.title}, Description: ${item.body}`;
  }

  posts: any[] = [];
  post: any = {};

  getPosts(): void {
    this.jsonPlaceholderService.getPosts().subscribe({
      next: (v) => (this.posts = v),
      error: (e) => (this.errorMessage = e.message),
      complete: () => console.info('complete'),
    });
  }

  getPost(id: number): void {
    this.jsonPlaceholderService.getPost(id).subscribe({
      next: (v) => (this.post = v),
      error: (e) => (this.errorMessage = e.message),
      complete: () => console.info('complete'),
    });
  }

  createPost(): void {
    const newPost = { title: 'foo', body: 'bar', userId: 1 };
    this.jsonPlaceholderService.createPost(newPost).subscribe({
      next: (v) => this.posts.unshift(v),
      error: (e) => (this.errorMessage = e.message),
      complete: () => console.info('complete'),
    });
  }

  updatePost(id: number): void {
    const updatedPost = { title: 'foo', body: 'bar', userId: 1 };
    this.jsonPlaceholderService.updatePost(id, updatedPost).subscribe({
      next: (v) => (this.post = v),
      error: (e) => (this.errorMessage = e.message),
      complete: () => console.info('complete'),
    });
  }

  patchPost(id: number): void {
    const patchedPost = { title: 'foo' };
    this.jsonPlaceholderService.patchPost(id, patchedPost).subscribe({
      next: (v) => (this.post = v),
      error: (e) => (this.errorMessage = e.message),
      complete: () => console.info('complete'),
    });
  }

  deletePost(id: number): void {
    this.jsonPlaceholderService.deletePost(id).subscribe({
      next: (v) => (this.posts = this.posts.filter((v) => v.id !== id)),
      error: (e) => (this.errorMessage = e.message),
      complete: () => console.info('complete'),
    });
  }
}
