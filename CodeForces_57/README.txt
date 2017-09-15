	A. Jeff and Digits

time limit per test : 1 second
memory limit per test : 256 megabytes
input : standard input
output : standard output

	Jeff's got n cards, each card contains either digit 0, or digit 5. 
	Jeff can choose several cards and put them in a line so that he gets some number. 
	What is the largest possible number divisible by 90 Jeff can make from the cards he's got?

	Jeff must make the number without leading zero. 
	At that, we assume that number 0 doesn't contain any leading zeroes. 
	Jeff doesn't have to use all the cards.

	Input :
The first line contains integer n (1 ≤ n ≤ 103). 
The next line contains n integers a1, a2, ..., an (ai = 0 or ai = 5). 
Number ai represents the digit that is written on the i-th card.

	Output :
In a single line print the answer to the problem — the maximum number, divisible by 90. 
If you can't make any divisible by 90 number from the cards, print -1.

	Examples :
input
4
5 0 5 0
output
0
-----------------------
input
11
5 5 5 5 5 5 5 5 0 5 5
output
5555555550
-----------------------
	Note :
In the first test you can make only one number that is a multiple of 90 — 0.

In the second test you can make number 5555555550, it is a multiple of 90.


http://codeforces.com/problemset/problem/352/A?locale=en
