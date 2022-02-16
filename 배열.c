#include <stdio.h>

int main(void)
{
	int i;
	double sum = 0;
	double grade[3]; //길이가 3인 배열 선언

	//배열 초기화
	grade[0] = 79.2;
	grade[1] = 54;
	grade[2] = 75.5;

	for (i = 0; i < 3; i++)
	{
		sum += grade[i];
	}
	printf("국영수 과목 총 점수 합계는 %.1lf 점이고, 평균 점수는 %.1lf 점입니다.\n", sum,(double)sum/3);
}