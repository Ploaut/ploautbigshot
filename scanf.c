#include <stdio.h>


int main()
{
	int age=0;
	int weight = 0;
	int height = 0;

	
	printf("당신의 나이를 입력하세요! :");
	scanf_s("%d", &age);
	printf("당신의 몸무게를 입력하세요! : ");
	scanf_s("%d", &weight);
	printf("당신의 키를 입력하세요! :");
	scanf_s("%d", &height);

	printf("__________________________________\n\n");
	printf("당신의 나이는 %d 살 몸무게는 %d kg 키는 %d cm 이군요!", age, weight, height);
}

//두번째 수정본
