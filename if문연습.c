#include <stdio.h>

int main(void)
{
	int c;
	char suc [] = "성공!";
	char fal[] = "실패!";
	
	printf("10보다 큰 수를 입력하세요:");
	scanf_s("%d", &c);


	if (c >= 10)
	{
		printf("%s\n",suc);
	}
	{
	if (c <= 10)
		printf("%s\n", fal);
	}
}