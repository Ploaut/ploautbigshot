#include <stdio.h>

void local(void);
int main(void)
{
	int i = 5;
	int var = 10;
	printf("main()함수 내의 지역 변수 var 값은 %d 입니다.\n", var);
	if (i < 10)
	{
		local();
		int var = 30;
		printf("if 문 내의 지역 변수 var의 값은 %d 입니다.\n", var);
	}
	printf("현재 지역 변수 var 의 값은 %d 입니다.\n", var);
	return 0;
}

void local(void)
{
	int var = 20;
	printf("local() 함수 내의 지역 변수 var의 값은 %d 입니다.\n",var);
}