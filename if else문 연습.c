#include <stdio.h>

int main(void)
{
	int c;
	char suc [] = "성공!";
	char fal[] = "원숭이인가요? 실패입니다!";
	
	printf("7이나 7 보다 큰 수를 입력해보세요:");
	scanf_s("%d", &c);


	if (c >= 7)
	{
		printf("%s\n",suc);
	}
	else
	{
		printf("%s\n", fal);
	}
	return 0;
}