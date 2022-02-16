#include <stdio.h>

int main(void)
{
	int a, b, c;



	printf("변수 a 의 값을 지정해주세요:");
	scanf_s("%d", &a);
	printf("변수 b 의 값을 지정해주세요:");
	scanf_s("%d", &b);
	printf("변수 c 의 값을 지정해주세요:");
	scanf_s("%d", &c);

	printf("-------------------------------------\n\n");
	printf("당신이 지정한 변수들의 값은 %d,%d,%d 군요!!", a, b, c);





}