export async function loading(): Promise<void> {
    await new Promise((resolve) => setTimeout(resolve, 2000));
}
